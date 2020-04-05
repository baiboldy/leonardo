using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Leo.Data;
using Leo.Models;

namespace Leo.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ImgsController : ControllerBase
    {
        private readonly AppDbContent _context;

        public ImgsController(AppDbContent context)
        {
            _context = context;
        }

        // GET: api/Imgs
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Img>>> GetImg()
        {
            return await _context.Img.ToListAsync();
        }

        // GET: api/Imgs/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Img>> GetImg(int id)
        {
            var img = await _context.Img.FindAsync(id);

            if (img == null)
            {
                return NotFound();
            }

            return img;
        }

        // PUT: api/Imgs/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutImg(int id, Img img)
        {
            if (id != img.id)
            {
                return BadRequest();
            }

            _context.Entry(img).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ImgExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Imgs
        [HttpPost]
        public async Task<ActionResult<Img>> PostImg(Img img)
        {
            _context.Img.Add(img);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetImg", new { id = img.id }, img);
        }

        // DELETE: api/Imgs/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<Img>> DeleteImg(int id)
        {
            var img = await _context.Img.FindAsync(id);
            if (img == null)
            {
                return NotFound();
            }

            _context.Img.Remove(img);
            await _context.SaveChangesAsync();

            return img;
        }

        private bool ImgExists(int id)
        {
            return _context.Img.Any(e => e.id == id);
        }
    }
}
