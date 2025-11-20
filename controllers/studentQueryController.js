const pool = require("../config/db");

exports.submitStudentQuery = async (req, res) => {
  try {
    const { name, email, phone, destination, comment } = req.body;

    const query = `
      INSERT INTO student_queries (name, email, phone, destination, comment)
      VALUES ($1, $2, $3, $4, $5)
      RETURNING id
    `;

    const values = [name, email, phone, destination, comment];

    const result = await pool.query(query, values);

    return res.status(201).json({
      success: true,
      message: "Query submitted successfully!",
      data: { id: result.rows[0].id }
    });
  } catch (error) {
    console.error("Error submitting student query:", error);
    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};
