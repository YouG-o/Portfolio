namespace Portfolio.Server.Models
{
    public class MongoDbSettings
    {
        public string ConnectionURI { get; set; } = null!;
        public string DatabaseName { get; set; } = null!;
        public string ProjectsCollectionName { get; set; } = null!;
        public string AboutCollectionName { get; set; } = null!;
        public string ContactCollectionName { get; set; } = null!;
    }
}