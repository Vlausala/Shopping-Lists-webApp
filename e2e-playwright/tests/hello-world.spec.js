const { test, expect } = require("@playwright/test");


test("Add and list shoppinglists", async ({ page }) => {
  // Navigate to /lists
  await page.goto("http://localhost:7777/lists");

  // Fill out the form
  const testInput = "Testi";
  const Input = page.getByTestId('InputField1');
  await Input.type(testInput);
  
  // Submit the form
  const Form = page.getByTestId('SubmitButton1');
  await Form.click();

  // Check that the name appears on the page
  const shoppingLists = await page.$$("ul > li");
  let flag = false;

  for (const shoppingList of shoppingLists) {
    const listName = await shoppingList.$eval("a", (teksti) => teksti.textContent);
    if (listName === testInput) {
      flag = true;
    }
  };

  // Check if the flag has changed
  expect(flag);
});


test('Show a shopping list', async ({ page }) => {
  
  // Navigate to the /lists/id/items page
  await page.goto('/lists');
  
  // Click a list item
  const Form = await page.$('ul li:last-child a[data-testid="Shoppinglist"]');
  await Form.click();

  const h1Header = await page.textContent("data-testid=Header2")
  expect(h1Header === "Existing items:" )
});


test('Navigate to items and add new item to the list', async ({ page }) => {
  // Navigate to the /lists/id/items page
  await page.goto('/lists');

  // Click a list item
  const Link = await page.$('ul li:last-child a[data-testid="Shoppinglist"]');
  await Link.click();

  // Fill out the form
  const testInput = "Testitavara";
  const Input = page.getByTestId('InputField1');
  await Input.type(testInput);
  
  // Submit the form
  const Form = page.getByTestId('SubmitButton1');
  await Form.click();
    
  // Check that the name appears on the page
  const items = await page.$$("ol > li");
  let flag = false;

  for (const item of items) {
    const itemName = await item.$eval("del", (teksti) => teksti.textContent);
    if (itemName === testInput) {
      flag = true;
    }
  };

  // Check if the flag has changed
  expect(flag);
});


test('Test if collected item gets crossed over', async ({ page }) => {
  // Navigate to the /lists/id/items page
  await page.goto('/lists');

  // Click a list item
  const Link = await page.$('ul li:last-child a[data-testid="Shoppinglist"]');
  await Link.click();

  const count = await page.$$eval("ul > ol > li > form", (elements) => elements.length);
  console.log(`Forms count: ${count}`);

  const items = await page.$$(`ul > ol > li > form[data-testid="SubmitButton2"] > input[type="submit"]`);
  const item = items[0];
  await item.click()
  

  // Check if the style is correct
  const ListItems = await page.$$("ul > ol > li > del");
  const FirstItem = ListItems[0]  
  const Style = await FirstItem.getAttribute('style');

  expect(Style).toContain("text-decoration: line-through;")
});