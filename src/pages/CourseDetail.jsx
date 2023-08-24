import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import styled from "styled-components";
import { getCourse } from "../librarys/exercise-api.js";

import dumbbell from "../assets/images/dumbbell.png";
import CheckB from "../assets/images/Check-Before.png";
import CheckA from "../assets/images/Check-After.png";
import Player from "../assets/images/play.png";

const Background = styled.div`
  width: 100%;
  height: 250px;
  background-color: #14f2c6;
  position: relative;
  margin-top: 20px;
`;

const ExerciseImage = styled.img`
  position: absolute;
  left: 150px;
  top: 40px;
  width: 300px;
  height: 180px;
  object-fit: cover;
`;

const ExerciseTitle = styled.h1`
  position: absolute;
  left: 500px;
  top: 40px;
  font-weight: bold;
  font-family: "SUIT Variable";
`;

const ExerciseDescription = styled.p`
  position: absolute;
  left: 500px;
  top: 70px;
  font-family: "SUIT Variable";
`;

const Tag = styled.div`
  position: absolute;
  left: 500px;
  top: 120px;
  width: 100px;
  height: 30px;
  background-color: white;
  border: 1px solid black;
  border-radius: 20px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
  font-family: "SUIT Variable";
`;

const DumbbellImage = styled.img`
  position: absolute;
  right: 100px;
  bottom: 10px;
`;

const CurriculumTitle = styled.h2`
  margin-top: 20px;
  margin-left: 80px;
  font-family: "SUIT Variable";
`;

const CurriculumBox = styled.div`
  margin-top: 25px;
  margin-left: 80px;
  width: 1200px;
  height: 60px;
  background-color: rgba(217, 217, 217, 0.38);
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const ActionTitleName = styled.span`
  margin-left: 60px;
  font-family: "SUIT Variable";
`;

const ActionTitleTime = styled.span`
  margin-right: 80px;
  font-family: "SUIT Variable";
`;

const DividerLine = styled.div`
  margin-top: 10px;
  margin-left: 80px;
  width: 1200px;
  height: 1px;
  background-color: black;
`;

const CourseInfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: 80px;
  width: 1200px;
  height: 60px;
`;

const CheckImage = styled.img`
  width: 25px;
  height: 25px;
  margin-left: 10px;
`;

const ActionName = styled.span`
  margin-left: -875px;
  font-family: "SUIT Variable";
`;
const ActionTime = styled.span`
  margin-right: -875px;
  font-family: "SUIT Variable";
`;

const PlayerButton = styled.button`
  background: url(${Player}) no-repeat center center;
  width: 40px;
  height: 40px;
  border: none;
  cursor: pointer;
  outline: none;
  transition: 0.3s;
  margin-right: 15px;

  &:hover {
    opacity: 0.7;
  }
`;

const CourseDetail = () => {
  const [course, setCourse] = useState(null);
  const [isChecked, setIsChecked] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    async function fetchCourse() {
      const courseData = await getCourse(Number(id));
      setCourse(courseData);
    }

    fetchCourse();
  }, [id]);

  if (!course) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Header />
      <Background>
        <ExerciseImage src={course.image} alt={course.title} />
        <ExerciseTitle>{course.title}</ExerciseTitle>
        <ExerciseDescription>{course.description}</ExerciseDescription>
        {course.tags.map((tag, index) => (
          <Tag key={index} style={{ left: `${500 + 110 * index}px` }}>
            {tag}
          </Tag>
        ))}
        <DumbbellImage src={dumbbell} alt="Dumbbell" />
      </Background>
      <CurriculumTitle>커리큘럼</CurriculumTitle>
      <CurriculumBox>
        <ActionTitleName>동작이름</ActionTitleName>
        <ActionTitleTime>동작시간</ActionTitleTime>
      </CurriculumBox>
      <CourseInfoContainer>
        <CheckImage
          src={isChecked ? CheckA : CheckB}
          alt={isChecked ? "Check After" : "Check Before"}
          onClick={() => setIsChecked((prev) => !prev)}
        />
        <ActionName>{course.title}</ActionName>
        <ActionTime>{course.time}</ActionTime>
        <PlayerButton onClick={() => {}} />
      </CourseInfoContainer>
      <DividerLine />
    </div>
  );
};

export default CourseDetail;
