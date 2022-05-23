using Recipes.Enum;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Recipes.Models
{
    public class StorageSpace
    {
        public int ID { get; set; }
        public string Name { get; set; }
        public StorageSpaceType StorageSpaceType { get; set; }
        public string Location { get; set; }
        public virtual ICollection<StoredMaterials> StoredMaterials { get; set; }
    }
}
