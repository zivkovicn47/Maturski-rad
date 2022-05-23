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
    public class UsedRecipesController : ControllerBase
    {
        private readonly RecipesContext _context;

        public UsedRecipesController(RecipesContext context)
        {
            _context = context;
        }

        // GET: api/UsedRecipes
        [HttpGet]
        public async Task<ActionResult<IEnumerable<UsedRecipes>>> GetUsedRecipes()
        {
            return await _context.UsedRecipes.ToListAsync();
        }

        // GET: api/UsedRecipes/5
        [HttpGet("{id}")]
        public async Task<ActionResult<UsedRecipes>> GetUsedRecipes(int id)
        {
            var usedRecipes = await _context.UsedRecipes.FindAsync(id);

            if (usedRecipes == null)
            {
                return NotFound();
            }

            return usedRecipes;
        }

        // PUT: api/UsedRecipes/5
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for
        // more details see https://aka.ms/RazorPagesCRUD.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutUsedRecipes(int id, UsedRecipes usedRecipes)
        {
            if (id != usedRecipes.ID)
            {
                return BadRequest();
            }

            _context.Entry(usedRecipes).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!UsedRecipesExists(id))
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

        // POST: api/UsedRecipes
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for
        // more details see https://aka.ms/RazorPagesCRUD.
        [HttpPost]
        public async Task<ActionResult<UsedRecipes>> PostUsedRecipes(UsedRecipes usedRecipes)
        {
            _context.UsedRecipes.Add(usedRecipes);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetUsedRecipes", new { id = usedRecipes.ID }, usedRecipes);
        }

        // DELETE: api/UsedRecipes/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<UsedRecipes>> DeleteUsedRecipes(int id)
        {
            var usedRecipes = await _context.UsedRecipes.FindAsync(id);
            if (usedRecipes == null)
            {
                return NotFound();
            }

            _context.UsedRecipes.Remove(usedRecipes);
            await _context.SaveChangesAsync();

            return usedRecipes;
        }

        private bool UsedRecipesExists(int id)
        {
            return _context.UsedRecipes.Any(e => e.ID == id);
        }
    }
}
