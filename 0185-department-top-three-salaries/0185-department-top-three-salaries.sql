select d.name as Department, e.name as Employee, e.salary as Salary 
from Employee e
inner join Department d on d.id = e.departmentId
where (
select count(distinct(salary))
    from Employee e1 
    where e1.salary >= e.salary and e1.departmentId=e.departmentId
) <=3
order by Department, Salary desc