using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Blog.Models;

    public class BlogPostsContext : DbContext
    {
        public BlogPostsContext (DbContextOptions<BlogPostsContext> options)
            : base(options)
        {
        }

        public DbSet<Blog.Models.BlogPost> BlogPost { get; set; }
    }
