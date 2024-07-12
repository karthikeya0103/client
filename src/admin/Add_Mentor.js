import  { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const AddMentor = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    subjects: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if(name==='subjects'){
        setFormData({ ...formData, [name]: [value] });
    }
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    console.log(formData);
    const result = await axios.post('http://localhost:8080/admin/add-mentor',formData);
    console.log(result);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6 text-center">Add Mentor</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter mentor's name"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter mentor's email"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter password"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="subject">
              Subject
            </label>
            <select
              id="subject"
              name="subjects"
              value={formData.subjects}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            >
              <option value="">Select a subject</option>
              <option value="maths">Maths</option>
              <option value="physics">Physics</option>
              <option value="chemistry">Chemistry</option>
              <option value="biology">Biology</option>
            </select>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Add Mentor
          </button>
        </form>
        <div className="mt-6">
          <Link to={'/all-mentors'}><button className="w-full bg-green-500 text-white py-2 rounded-lg shadow-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 mt-2">
            Get Mentors
          </button>
          </Link>
          <button className="w-full bg-yellow-500 text-white py-2 rounded-lg shadow-md hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-500 mt-2">
            Get Users
          </button>
          <button className="w-full bg-red-500 text-white py-2 rounded-lg shadow-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 mt-2">
            Delete Mentor
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddMentor;