package com.sandeep.CourseMS.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.sandeep.CourseMS.entities.Course;

public interface CourseDAO extends JpaRepository<Course,Integer> {

}
