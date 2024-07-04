export function UserSignUpForm() {
  return (
    <>
      <div>
        <form>
          <div>
            <label htmlFor="userFirstName">First Name</label>
            <input type="text" name="userFirstName" id="userFirstName" />
          </div>
          <div>
            <label htmlFor="userLastName">Last Name</label>
            <input type="text" name="userLastName" id="userLastName" />
          </div>
          <div>
            <label htmlFor="userEmail">Email</label>
            <input type="text" name="userEmail" id="userEmail" />
          </div>
          <div>
            <label htmlFor="userContactNumber">Contact Number</label>
            <input
              type="text"
              name="userContactNumber"
              id="userContactNumber"
            />
          </div>
          <div>
            <label htmlFor="userImage">Image</label>
            <input type="file" name="" id="" />
          </div>
          <div>
            <label htmlFor="userPassword">Password</label>
            <input type="text" name="userPassword" id="userPassword" />
          </div>
        </form>
      </div>
    </>
  );
}
