import { Link } from "react-router-dom";
import styled from "styled-components";

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

const CenteredContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  flex-direction: column;
  gap: 20px;
`;

const RouteButton = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  border: none;
  background-color: #3592ff;
  color: white;
  border-radius: 5px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #2c75e0;
  }
`;

const DevelopPage = () => {
  const routes = [
    { path: "/login", name: "030LoginPage" },
    { path: "/signup", name: "017SignupPage" },
    { path: "/", name: "DevelopPage" },
    { path: "/userdash", name: "001MyUserPage" },
    { path: "/untact/list", name: "004UserUntactReservePage" },
    { path: "/userreserve", name: "005UserReservePage" },
    { path: "/doctordash", name: "009DoctorDashBoardPage" },
    { path: "/doctorchart", name: "010DoctorChartPage" },
    { path: "/doctordetail", name: "013DoctorDetailPage" },
    { path: "/doctorpatientlist", name: "012DoctorPatientListPage" },
    { path: "/untact/list", name: "014DoctorUntactReservePage" },
    { path: "/theradashboard", name: "018TheraDashBoardPage" },
    { path: "/untact/list", name: "025TheraUntactReservePage" },
    { path: "/therapatientlist", name: "027TheraPatientListPage" },
    { path: "/theradetail", name: "028TheraDetailPage" },
    { path: "/theraexerciselist", name: "019TheraExerciseListPage" },
    { path: "/theraexerciseadd", name: "021TheraExerciseAddPage" },
    { path: "/theramakeassgin", name: "022TheraMakeAssignPage" },
  ];

  return (
    <PageContainer>
      <CenteredContainer>
        {routes.map((route) => (
          <Link key={route.path} to={route.path}>
            <RouteButton>{route.name}</RouteButton>
          </Link>
        ))}
      </CenteredContainer>
    </PageContainer>
  );
};

export default DevelopPage;
