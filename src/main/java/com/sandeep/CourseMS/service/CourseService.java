package com.sandeep.CourseMS.service;

import java.util.List;


import com.sandeep.CourseMS.entities.Course;

public interface CourseService {


	public List<Course> getCoureses();

	public Course getCourse(int courseId);


	public Course addCourse(Course course);

	public Course updateCourse(Course course);

	public void deleteCourse(int courseId);
}
