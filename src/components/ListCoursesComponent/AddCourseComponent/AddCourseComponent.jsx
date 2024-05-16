import "./AddCourseComponent.css";
import CourseFormComponent from "../CourseFormComponent/CourseFormComponent";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { retrieveCourseApi } from "../../../api/CourseApiService";

export default function AddCourseComponent() {

  const {id} = useParams();

  const [course, setCourse] = useState({});

  useEffect(() => {
    async function fetchCourse(){
      console.log(id);
      if(id !== undefined){
        const response = await retrieveCourseApi(id);
      // console.log(response);
      setCourse(response.data);
      // console.log(student);
      }
      
    };
    fetchCourse()
    
  }, []);

  

  return (
    <div className="add-course-component">
      <h2>Enter Course Data</h2>
      <CourseFormComponent course={course}/>
    </div>
  );
}