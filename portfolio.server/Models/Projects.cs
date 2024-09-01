using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace Portfolio.Server.Models
{
    public class Project
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string Id { get; set; } = null!;

        [BsonElement("name")]
        public string Name { get; set; } = null!;

        [BsonElement("icon")]
        public string Icon { get; set; } = null!;

        [BsonElement("description")]
        public string Description { get; set; } = null!;

        [BsonElement("stack")]
        public List<string> Stack { get; set; } = null!;

        [BsonElement("repository")]
        public string? Repository { get; set; }

        [BsonElement("pictures")]
        public List<string>? Pictures { get; set; }
    }
}
