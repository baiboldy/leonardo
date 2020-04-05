using Leo.Data.Interfaces;
using Leo.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Leo.Data.Repository
{
    public class CarRepository : ICar
    {
        private readonly AppDbContent _context;
        
        public CarRepository(AppDbContent context)
        {
            _context = context;
        }

        public async Task AddCar(Car car)
        {
            _context.Car.Add(car);
            try
            {
                await _context.SaveChangesAsync();
            }
            catch(Exception ex)
            {
                throw ex;
            }
        }

        public async Task ChangeCar( Car car)
        {
            _context.Entry(car).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException er)
            {
                throw er;      
            }
        }

        public void create(Car car)
        {
            throw new NotImplementedException();
        }

        public async Task DeleteCar(Car car)
        {
            _context.Remove(car);
            await _context.SaveChangesAsync();
        }

        public async Task<Car> GetCar(int id)
        {
            return await _context.Car.FindAsync(id);
        }

        public async Task<List<Car>> GetCars()
        {
            return await _context.Car.Include(x => x.img).ToListAsync();
        }

        public bool CarExists(int id)
        {
            return _context.Car.Any(e => e.id == id);
        }


    }
}
