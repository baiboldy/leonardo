using Leo.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Leo.Data.Interfaces
{
    public interface ICar
    {
        Task<List<Car>> GetCars();
        Task<Car> GetCar(int id);
        Task ChangeCar(Car car);
        Task DeleteCar(Car car);
        Task AddCar(Car car);
        void create(Car car);
        bool CarExists(int id);
    }
}
