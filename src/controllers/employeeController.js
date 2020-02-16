const db = require("../config/db");

exports.get = (req, res) => {
  db.query("SELECT *  FROM employees", (err, results, fields) => {
    if (err) res.json(err);
    res.json({
      success: true,
      data: results
    });
  });
};

exports.save = (req, res) => {
  const data = req.body;
  db.query("INSERT INTO employees set ?", data, (err, employee) => {
    if (err) res.status(500).json("Error creating record");
    res.status(201).json({
      success: true,
      data: employee
    });
  });
};

exports.update = (req, res) => {
  const { id } = req.params;
  const newEmployee = req.body;

  // Only existing record in the database can be updated
  db.query(
    {
      sql: "SELECT * FROM `employees` WHERE `id` = ?",
      timeout: 40000, // 40s
      values: [id]
    },
    (err, results, fields) => {
      if (err) return res.json(err);
      const response = JSON.stringify(results[0]);

      if (!response)
        return res.json(`There is no such record ${id} to update `);

      if (response.id !== null || response.id === parseInt(id)) {
        db.query(
          "UPDATE employees set ? where id = ?",
          [newEmployee, id],
          (err, rows) => {
            if (err) res.status(500).json("Error updating record");
            res.status(200).json({
              success: true,
              msg: "successfully updated record"
            });
          }
        );
      } else {
        res.json({ errMsg: "unable to update" });
      }
    }
  );
};

exports.delete = (req, res) => {
  const { id } = req.params;

  // Only existing record in the database can be deleted
  db.query(
    {
      sql: "SELECT * FROM `employees` WHERE `id` = ?",
      timeout: 40000, // 40s
      values: [id]
    },
    (err, results, fields) => {
      if (err) return res.json(err);
      const response = JSON.stringify(results[0]);

      if (!response)
        return res.json(`There is no such record ${id} to delete `);

      if (response.id !== null || response.id === parseInt(id)) {
        db.query(
          `DELETE FROM employees WHERE id = ${parseInt(id)}`,
          (err, rows) => {
            if (err) res.status(500).json("Error updating record");
            res.status(204).json({
              success: true,
              msg: "successfully updated record"
            });
          }
        );
      } else {
        res.json({ errMsg: "unable to update" });
      }
    }
  );
};
