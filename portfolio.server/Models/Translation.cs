
using MongoDB.Bson.Serialization.Attributes;

namespace Portfolio.Server.Models
{
        public class TranslatedText
    {
        [BsonElement("en")]
        public string? En { get; set; }

        [BsonElement("fr")]
        public string? Fr { get; set; }
    }
}
