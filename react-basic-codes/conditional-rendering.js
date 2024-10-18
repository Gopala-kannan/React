// Conditional rendering
// if else method 

let content;
if (isLoggedIn) {
  content = <AdminPanel />
}
else{
  content = <LoginForm />;
}
return(
  <div>
  {content}
  </div>
)

// Or

return(
  <div>
  {isLoggedIn ?(
    <AdminPanel />
  ) : (
    <LoginForm />
  )}
  </div>

    // Or 

    <div>{isLoggedIn && <AdminPanel />}</div>
)
