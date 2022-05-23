using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Recipes.Models
{
    public class StoredMaterials
    {
        public int ID { get; set; }
        public DateTime StoredAt { get; set; }
        public int StoredSpaceID { get; set; }
        public int FoodID { get; set; }
        public virtual Food Food { get; set; }
        public virtual StorageSpace StorageSpace { get; set; }
    }
}
