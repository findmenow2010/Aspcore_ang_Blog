using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace Blog.Models
{
    [Table("Blogposts")]
    public class BlogPost
    {
        [Key]
        [Column("Id")]
        public int PostId { get; set; }

        [Required,MaxLength(150)]
        public string Creator { get; set; }

        [Required,MaxLength(250)]
        public string Title { get; set; }

        [Required, MaxLength(250)]
        public string Body { get; set; }

        [Required,DataType(DataType.DateTime)]
        public DateTime Dt { get; set; }
    }
}
