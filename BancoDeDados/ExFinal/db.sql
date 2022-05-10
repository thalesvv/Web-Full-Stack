-- Questão 1
SELECT * FROM products WHERE category_id = 2 
-- ou
SELECT COUNT(*) FROM products WHERE category_id = 2 
-- Resposta: 12 produtos


-- Questão 2
SELECT * FROM products WHERE supplier_id = category_id
GROUP BY product_id
HAVING unit_price > 10
-- Resposta: 5 tipos de produtos diferentes


--Questão 3
SELECT product_name, unit_price, units_in_stock, units_on_order, quantity_per_unit FROM products WHERE category_id = 1 or category_id =2 or category_id = 7
-- Resposta: 29 produtos diferentes


-- Questão 4
SELECT * FROM products WHERE product_name 
LIKE 'A%' or product_name LIKE '%h%' limit 5;
-- Resposta: Não sei se entendi a pergunta, pois pede para falar as colunas sendo que a resposta está em linhas.
-- Portanto seguem os nomes dos primeiros 5 produtos: Chai, Chang, Anissed Syrup, Chef Anton's Cajun Seasoning e Chef Anton's Gumbo Mix
-- Em português: Chai, Chang, Xarope de anis, Tempero Cajun do Chef Anton e Mistura Gumbo do Chef Anton   



-- Questão 5
SELECT round(cast(avg(unit_price) as numeric), 1) 
FROM products WHERE category_id < 6
-- Resposta: 27.5


-- Questão 6
SELECT supplier_id, AVG(unit_price), product_name FROM products 
GROUP BY supplier_id, product_name
ORDER BY AVG(unit_price) DESC limit 5;
-- Resposta: https://prnt.sc/oj84kX92BTWJ


-- Questão 7
SELECT customer_id from orders
WHERE employee_id IS DISTINCT FROM NULL
GROUP BY customer_id
HAVING COUNT(order_id) > 2
ORDER BY COUNT(order_id) DESC
-- Resposta: https://prnt.sc/rY17ZQCalxFx


-- Questão 8
SELECT city, phone FROM suppliers
GROUP BY city, phone
HAVING COUNT(city) > 1
ORDER BY city ASC
-- Resposta: Não



-- Questão 9
SELECT company_name, city, country
FROM customers
ORDER BY company_name ASC
-- Resposta: https://prnt.sc/VMfjowqreAu_



-- Questão 10
SELECT company_name, city, country
FROM customers
WHERE city <> 'Berlin' 
AND city <> 'Madrid' 
AND city <> 'Paris' 
ORDER BY company_name ASC
-- Resposta: https://prnt.sc/2PyUfKwzOXVj



-- EXTRAS

-- Extra 1:
SELECT employee_id, COUNT(order_id)
FROM orders
WHERE order_date BETWEEN '1997-01-01' AND '1997-03-31'
GROUP BY employee_id
ORDER BY COUNT(order_id) DESC
LIMIT 3
-- Resposta: https://prnt.sc/nm7yx0BTfjMK



-- Extra 2:
SELECT COUNT(supplier_id) ,
COUNT(*) as total,
SUM(CASE WHEN country ='Brazil' OR
country = 'USA' OR country = 'Canada' then 1 else 0 end)
AS America,
ABS(COUNT(*)-SUM(CASE WHEN country ='Brazil' OR
country = 'USA' OR country = 'Canada' then 1 else 0 end))
AS Outros
FROM suppliers
-- Resposta: https://prnt.sc/Ujo5TXPXg_1j



-- Extra 3:
SELECT LEFT(city, 1) AS iniciaisCidades,
COUNT(supplier_id)
FROM suppliers
GROUP BY iniciaisCidades
ORDER BY COUNT(supplier_id) DESC

-- Resposta: https://prnt.sc/xQas4M6kSTTC