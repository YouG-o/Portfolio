public class ContactMessage
{
    public string Name { get; set; } = null!;
    public string Email { get; set; } = null!;
    public string Message { get; set; } = null!;
    public DateTime DateSent { get; set; }
}

// Models/ContactFormDto.cs
public class ContactFormDto
{
    public string Name { get; set; } = null!;
    public string Email { get; set; } = null!;
    public string Message { get; set; } = null!;
}