
using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
using System.Collections.Generic;

namespace Portfolio.Server.Models
{   
    public class Project
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        [BsonElement("_id")]
        public string Id { get; set; } = null!;

        [BsonElement("id")]
        public int CustomId { get; set; }

        [BsonElement("name")]
        public TranslatedText Name { get; set; } = null!;

        [BsonElement("isFictional")]
        public bool IsFictional { get; set; }

        [BsonElement("icon")]
        public string Icon { get; set; } = null!;

        [BsonElement("description")]
        public TranslatedText Description { get; set; } = null!;

        [BsonElement("problems")]
        public TranslatedText? Problems { get; set; }

        [BsonElement("stack")]
        public List<string> Stack { get; set; } = null!;

        [BsonElement("repository")]
        public string? Repository { get; set; }

        [BsonElement("pictures")]
        public List<string>? Pictures { get; set; }

        [BsonElement("deploymentUrl")]
        public string? DeploymentUrl { get; set; }
    }
}