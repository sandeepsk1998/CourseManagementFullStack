package com.sandeep.CourseMS.controller;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RestController;
import com.sandeep.CourseMS.entities.Course;
import com.sandeep.CourseMS.service.CourseService;


@CrossOrigin(origins="http://localhost:3000")
@RestController
public class MyController {

	@Autowired
	private CourseService courseservice;

//	@GetMapping("/home")
//	public String home() {
//		return "This is hom2epage";
//	}

	// Get the list of courses

	@GetMapping("/courses")
	public List<Course> getCourses() {
		return this.courseservice.getCoureses();

	}
	
	@GetMapping("/courses/{courseId}")
	public Course getCourse(@PathVariable int courseId) {
		return this.courseservice.getCourse(courseId);
	}
	
	@PostMapping("/courses")
	public Course addCourse(@RequestBody Course course) {
		
		return this.courseservice.addCourse(course);
	}
	
	
	@PutMapping("/courses")
	public Course updateCourse(@RequestBody Course course) {
		return this.courseservice.updateCourse(course);
		
	}
	
	
	@DeleteMapping("/courses/{courseId}")
	public ResponseEntity<HttpStatus> deleteCourse(@PathVariable int courseId){
		
		try {
		this.courseservice.deleteCourse(courseId);
		return new ResponseEntity<>(HttpStatus.OK);
		}
		catch(Exception e) {
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
		
	}
	
	
}
