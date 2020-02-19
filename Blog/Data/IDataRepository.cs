using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Blog.Data
{
    public interface IDataRepository<T> where T : class
    {
        void add(T entity);
        void update(T entity);
        void delete(T entity);
        Task<T> SaveAsync(T entity);
    }
}
