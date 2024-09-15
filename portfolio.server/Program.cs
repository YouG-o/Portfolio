using Microsoft.Extensions.Options;
using Portfolio.Server.Models;
using MongoDB.Driver;

var builder = WebApplication.CreateBuilder(args);

// MongoDB Configuration
builder.Services.Configure<MongoDbSettings>(builder.Configuration.GetSection("MongoDbSettings"));

builder.Services.AddSingleton<IMongoClient>(sp =>
{
    var settings = sp.GetRequiredService<IOptions<MongoDbSettings>>().Value;
    return new MongoClient(Environment.GetEnvironmentVariable("MONGODB_URI") ?? settings.ConnectionURI);
});

builder.Services.AddSingleton<IMongoDatabase>(sp =>
{
    var settings = sp.GetRequiredService<IOptions<MongoDbSettings>>().Value;
    var client = sp.GetRequiredService<IMongoClient>();
    return client.GetDatabase(settings.DatabaseName);
});

builder.Services.AddSingleton<IMongoCollection<Project>>(sp =>
{
    var database = sp.GetRequiredService<IMongoDatabase>();
    var settings = sp.GetRequiredService<IOptions<MongoDbSettings>>().Value;
    return database.GetCollection<Project>(settings.ProjectsCollectionName);
});

builder.Services.AddSingleton<IMongoCollection<About>>(sp =>
{
    var database = sp.GetRequiredService<IMongoDatabase>();
    var settings = sp.GetRequiredService<IOptions<MongoDbSettings>>().Value;
    return database.GetCollection<About>(settings.AboutCollectionName);
});

builder.Services.AddSingleton<IMongoCollection<ContactMessage>>(sp =>
{
    var database = sp.GetRequiredService<IMongoDatabase>();
    var settings = sp.GetRequiredService<IOptions<MongoDbSettings>>().Value;
    return database.GetCollection<ContactMessage>(settings.ContactCollectionName);
});


// Add CORS to allow requests from the front-end
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowFrontend", policy =>
    {
        policy.WithOrigins(Environment.GetEnvironmentVariable("FRONTEND_URL") ?? "http://localhost:3000") // Front URL
              .AllowAnyHeader()
              .AllowAnyMethod();
    });
});

var app = builder.Build();

app.UseCors("AllowFrontend");

app.UseHttpsRedirection();

// Routes configuration (Minimal API)
app.MapGet("/api/projects", async (IMongoCollection<Project> collection) =>
{
    try
    {
        var projects = await collection.Find(_ => true).ToListAsync();
        return Results.Ok(projects);
    }
    catch (Exception ex)
    {
        Console.WriteLine($"Error retrieving projects: {ex.Message}");
        return Results.Problem("An error occurred while retrieving projects.");
    }
});

app.MapGet("/api/about", async (IMongoCollection<About> collection) =>
{
    try
    {
        var about = await collection.Find(_ => true).ToListAsync();
        return Results.Ok(about);
    }
    catch (Exception ex)
    {
        Console.WriteLine($"Error retrieving about information: {ex.Message}");
        return Results.Problem("An error occurred while retrieving about information.");
    }
});

app.MapPost("/api/contact", async (IMongoCollection<ContactMessage> collection, ContactFormDto contactFormDto) =>
{
    try
    {
        var contactMessage = new ContactMessage
        {
            Name = contactFormDto.Name,
            Email = contactFormDto.Email,
            Message = contactFormDto.Message,
            DateSent = DateTime.UtcNow
        };

        await collection.InsertOneAsync(contactMessage);
        return Results.Ok("Message received.");
    }
    catch (Exception ex)
    {
        Console.WriteLine($"Error processing contact form: {ex.Message}");
        return Results.Problem("An error occurred while processing your message.");
    }
});


app.Run();