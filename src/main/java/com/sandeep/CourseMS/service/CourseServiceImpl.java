package com.sandeep.CourseMS.service;


import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sandeep.CourseMS.dao.CourseDAO;
import com.sandeep.CourseMS.entities.Course;

@Service
public class CourseServiceImpl implements CourseService {

	@Autowired
	private CourseDAO coursedao;

	/*
	 * List<Course> list;
	 * 
	 * public CourseServiceImpl() { list=new ArrayList<>(); list.add(new
	 * Course(145,"H","K")); list.add(new Course(25,"H","K")); }
	 * 
	 * @Override public List<Course> getCoureses() {
	 * 
	 * return list; }
	 * 
	 * @Override public Course getCourse(int courseId) { Course c=null; for(Course
	 * course:list) { if(course.getId() == courseId) { c=course; break; } } return
	 * c; }
	 * 
	 * @Override public Course addCourse(Course course) { list.add(course); return
	 * course; }
	 * 
	 * @Override public Course updateCourse(Course course) { list.forEach(e ->{
	 * if(e.getId() == course.getId()) { e.setTitle(course.getTitle());
	 * e.setDescription(course.getDescription()); } }); return course; }
	 * 
	 * @Override public void deleteCourse(int courseId) {
	 * list=this.list.stream().filter(e ->
	 * e.getId()!=courseId).collect(Collectors.toList());
	 * 
	 * }
	 * 
	 */

	@Override
	public List<Course> getCoureses() {
		return coursedao.findAll();
	}

	@Override
	public Course getCourse(int courseId) {

		return coursedao.getReferenceById(courseId);

	}

	@Override
	public Course addCourse(Course course) {

		coursedao.save(course);
		return course;
	}

	@Override
	public Course updateCourse(Course course) {

		coursedao.save(course);
		return course;
	}

	@Override
	public void deleteCourse(int courseId) {
		Course entity=coursedao.getReferenceById(courseId);
		coursedao.delete(entity);

	}

}
