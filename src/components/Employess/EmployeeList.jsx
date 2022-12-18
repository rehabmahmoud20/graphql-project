import { useSelector, useDispatch } from "react-redux";
import EmployeeCard from "./EmployeeCard/EmployeeCard";

import { removeEmployee } from "../../Redux/DataSlice";
import PaginationControlled from "./PaginationControlled";
import { useState } from "react";

const EmployeeList = () => {
  const dispatch = useDispatch();
  const emps = useSelector((state) => state.employeData.employee);
  const [currentPage, setCurrentPge] = useState(1);
  const [empPerPage, setempPerPage] = useState(5);
  const lastIndex = currentPage * empPerPage;
  const firstIndex = lastIndex - empPerPage;
  const currentEmp = emps.slice(firstIndex, lastIndex);
  const page = (num)=> setCurrentPge(num)

  //  remove employee
  const deleteEmployee = (id) => {
    dispatch(removeEmployee(id));
  };
  return (
    <main className="  main-content  w-full  md:grid      h-fit gap-y-9 px-1 md:px-4   h-screen lg:px-9 relative">
      {currentEmp.map((e) => (
        <EmployeeCard employee={e} key={e.id} removeEmp={deleteEmployee} />
      ))}
      <div className="absolute pagination-position right-0">
      <PaginationControlled totalEmp={emps.length} empPerPage={empPerPage} handle={page}/>

      </div>
    </main>
  );
};

export default EmployeeList;
