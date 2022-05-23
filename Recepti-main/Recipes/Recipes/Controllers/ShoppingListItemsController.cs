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
    public class ShoppingListItemsController : ControllerBase
    {
        private readonly RecipesContext _context;

        public ShoppingListItemsController(RecipesContext context)
        {
            _context = context;
        }

        // GET: api/ShoppingListItems
        [HttpGet]
        public async Task<ActionResult<IEnumerable<ShoppingListItems>>> GetShoppingListItems()
        {
            return await _context.ShoppingListItems.ToListAsync();
        }

        // GET: api/ShoppingListItems/5
        [HttpGet("{id}")]
        public async Task<ActionResult<ShoppingListItems>> GetShoppingListItems(int id)
        {
            var shoppingListItems = await _context.ShoppingListItems.FindAsync(id);

            if (shoppingListItems == null)
            {
                return NotFound();
            }

            return shoppingListItems;
        }

        // PUT: api/ShoppingListItems/5
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for
        // more details see https://aka.ms/RazorPagesCRUD.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutShoppingListItems(int id, ShoppingListItems shoppingListItems)
        {
            if (id != shoppingListItems.ID)
            {
                return BadRequest();
            }

            _context.Entry(shoppingListItems).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ShoppingListItemsExists(id))
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

        // POST: api/ShoppingListItems
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for
        // more details see https://aka.ms/RazorPagesCRUD.
        [HttpPost]
        public async Task<ActionResult<ShoppingListItems>> PostShoppingListItems(ShoppingListItems shoppingListItems)
        {
            _context.ShoppingListItems.Add(shoppingListItems);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetShoppingListItems", new { id = shoppingListItems.ID }, shoppingListItems);
        }

        // DELETE: api/ShoppingListItems/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<ShoppingListItems>> DeleteShoppingListItems(int id)
        {
            var shoppingListItems = await _context.ShoppingListItems.FindAsync(id);
            if (shoppingListItems == null)
            {
                return NotFound();
            }

            _context.ShoppingListItems.Remove(shoppingListItems);
            await _context.SaveChangesAsync();

            return shoppingListItems;
        }

        private bool ShoppingListItemsExists(int id)
        {
            return _context.ShoppingListItems.Any(e => e.ID == id);
        }
    }
}
