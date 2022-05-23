using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Recipes.Models;

namespace Recipes.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class StorageSpacesController : ControllerBase
    {
        private readonly RecipesContext _context;

        public StorageSpacesController(RecipesContext context)
        {
            _context = context;
        }

        // GET: api/StorageSpaces
        [HttpGet]
        public async Task<ActionResult<IEnumerable<StorageSpace>>> GetStorageSpaces()
        {
            return await _context.StorageSpaces.ToListAsync();
        }

        // GET: api/StorageSpaces/5
        [HttpGet("{id}")]
        public async Task<ActionResult<StorageSpace>> GetStorageSpace(int id)
        {
            var storageSpace = await _context.StorageSpaces.FindAsync(id);

            if (storageSpace == null)
            {
                return NotFound();
            }

            return storageSpace;
        }

        // PUT: api/StorageSpaces/5
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for
        // more details see https://aka.ms/RazorPagesCRUD.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutStorageSpace(int id, StorageSpace storageSpace)
        {
            if (id != storageSpace.ID)
            {
                return BadRequest();
            }

            _context.Entry(storageSpace).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!StorageSpaceExists(id))
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

        // POST: api/StorageSpaces
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for
        // more details see https://aka.ms/RazorPagesCRUD.
        [HttpPost]
        public async Task<ActionResult<StorageSpace>> PostStorageSpace(StorageSpace storageSpace)
        {
            _context.StorageSpaces.Add(storageSpace);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetStorageSpace", new { id = storageSpace.ID }, storageSpace);
        }

        // DELETE: api/StorageSpaces/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<StorageSpace>> DeleteStorageSpace(int id)
        {
            var storageSpace = await _context.StorageSpaces.FindAsync(id);
            if (storageSpace == null)
            {
                return NotFound();
            }

            _context.StorageSpaces.Remove(storageSpace);
            await _context.SaveChangesAsync();

            return storageSpace;
        }

        private bool StorageSpaceExists(int id)
        {
            return _context.StorageSpaces.Any(e => e.ID == id);
        }
    }
}
