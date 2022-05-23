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
    public class StoredMaterialsController : ControllerBase
    {
        private readonly RecipesContext _context;

        public StoredMaterialsController(RecipesContext context)
        {
            _context = context;
        }

        // GET: api/StoredMaterials
        [HttpGet]
        public async Task<ActionResult<IEnumerable<StoredMaterials>>> GetStoredMaterials()
        {
            return await _context.StoredMaterials.ToListAsync();
        }

        // GET: api/StoredMaterials/5
        [HttpGet("{id}")]
        public async Task<ActionResult<StoredMaterials>> GetStoredMaterials(int id)
        {
            var storedMaterials = await _context.StoredMaterials.FindAsync(id);

            if (storedMaterials == null)
            {
                return NotFound();
            }

            return storedMaterials;
        }

        // PUT: api/StoredMaterials/5
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for
        // more details see https://aka.ms/RazorPagesCRUD.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutStoredMaterials(int id, StoredMaterials storedMaterials)
        {
            if (id != storedMaterials.ID)
            {
                return BadRequest();
            }

            _context.Entry(storedMaterials).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!StoredMaterialsExists(id))
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

        // POST: api/StoredMaterials
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for
        // more details see https://aka.ms/RazorPagesCRUD.
        [HttpPost]
        public async Task<ActionResult<StoredMaterials>> PostStoredMaterials(StoredMaterials storedMaterials)
        {
            _context.StoredMaterials.Add(storedMaterials);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetStoredMaterials", new { id = storedMaterials.ID }, storedMaterials);
        }

        // DELETE: api/StoredMaterials/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<StoredMaterials>> DeleteStoredMaterials(int id)
        {
            var storedMaterials = await _context.StoredMaterials.FindAsync(id);
            if (storedMaterials == null)
            {
                return NotFound();
            }

            _context.StoredMaterials.Remove(storedMaterials);
            await _context.SaveChangesAsync();

            return storedMaterials;
        }

        private bool StoredMaterialsExists(int id)
        {
            return _context.StoredMaterials.Any(e => e.ID == id);
        }
    }
}
