using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace Portfolio.Server.Models
{
    public class About
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string Id { get; set; } = null!;

        [BsonElement("type")]
        public string Type { get; set; } = null!;

        [BsonElement("id")]
        public int CustomId { get; set; }

        [BsonElement("name")]
        public string Name { get; set; } = null!;

        [BsonElement("icon")]
        public string Icon { get; set; } = null!;

        [BsonElement("introduction")]
        public string? Introduction { get; set; }

        [BsonElement("hobbies")]
        public string? Hobbies { get; set; }

        [BsonElement("myStack")]
        public MyStack? MyStack { get; set; } 

        [BsonElement("trainings")]
        public List<TrainingDetails>? Trainings { get; set; }
    }

    public class MyStack
    {
        [BsonElement("languages")]
        public List<string> Languages { get; set; } = null!;

        [BsonElement("frontEnd")]
        public List<string> FrontEnd { get; set; } = null!;

        [BsonElement("backEnd")]
        public List<string> BackEnd { get; set; } = null!;

        [BsonElement("dataBases")]
        public List<string> DataBases { get; set; } = null!;

        [BsonElement("tools")]
        public List<string> Tools { get; set; } = null!;
    }

    public class TrainingDetails
    {
        [BsonElement("title")]
        public string Title { get; set; } = null!;

        [BsonElement("degree")]
        public string Degree { get; set; } = null!;

        [BsonElement("school")]
        public string School { get; set; } = null!;

        [BsonElement("schoolIcon")]
        public string? SchoolIcon { get; set; }

        [BsonElement("location")]
        public string Location { get; set; } = null!;

        [BsonElement("date")]
        public string Date { get; set; } = null!;

        [BsonElement("length")]
        public string Length { get; set; } = null!;

        [BsonElement("description")]
        public string Description { get; set; } = null!;

        [BsonElement("skills")]
        public List<string> Skills { get; set; } = null!;

        [BsonElement("link")]
        public string? Link { get; set; }
    }
}
