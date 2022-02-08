function createClassRoom(numberOfStudents) 
{
    function studentSeat(seat) 
    {
        return function() 
        {
            return seat;
        }
    }
    let students = [];
    for (let i = 0; i < numberOfStudents; i++) 
    {
        students[i] = studentSeat(i + 1);
        // Using a loop from 0 to numbersOfStudents, pass the number of iteration + 1 to studentSeat and add its return value to the students array
    }
    return students;
}
let classRoom = createClassRoom(10); // closure