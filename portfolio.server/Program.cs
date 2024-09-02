using Microsoft.Extensions.Options;
using Portfolio.Server.Models;
using MongoDB.Driver;

var builder = WebApplication.CreateBuilder(args);

// Configuration of services for MongoDB
builder.Services.Configure<MongoDbSettings>(
    builder.Configuration.GetSection("MongoDbSettings"));

builder.Services.AddSingleton<IMongoClient, MongoClient>(sp =>
{
    var settings = sp.GetRequiredService<IOptions<MongoDbSettings>>().Value;
    return new MongoClient(settings.ConnectionURI);
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

// Add CORS to allow requests from the front-end
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowFrontend", policy =>
    {
        policy.WithOrigins("http://localhost:3000") // Front URL
              .AllowAnyHeader()
              .AllowAnyMethod();
    });
});

var app = builder.Build();

app.UseCors("AllowFrontend");

// Add other middlewares like UseHttpsRedirection, etc.
app.UseHttpsRedirection();

// Route configuration (Minimal API)
app.MapGet("/api/projects", async (IMongoCollection<Project> collection) =>
{
    var projects = await collection.Find(_ => true).ToListAsync();
    return Results.Ok(projects);
});

app.MapGet("/api/projects/{id}", async (IMongoCollection<Project> collection, string id) =>
{
    var project = await collection.Find(p => p.Id == id).FirstOrDefaultAsync();
    if (project is null)
        return Results.NotFound();

    return Results.Ok(project);
});

// app.MapPost("/api/projects", async (IMongoCollection<Project> collection, Project project) =>
// {
//     await collection.InsertOneAsync(project);
//     return Results.Created($"/api/projects/{project.Id}", project);
// });

// app.MapPut("/api/projects/{id}", async (IMongoCollection<Project> collection, string id, Project updatedProject) =>
// {
//     var result = await collection.ReplaceOneAsync(p => p.Id == id, updatedProject);
//     if (result.MatchedCount == 0)
//         return Results.NotFound();

//     return Results.NoContent();
// });

// app.MapDelete("/api/projects/{id}", async (IMongoCollection<Project> collection, string id) =>
// {
//     var result = await collection.DeleteOneAsync(p => p.Id == id);
//     if (result.DeletedCount == 0)
//         return Results.NotFound();

//     return Results.NoContent();
// });

app.Run();