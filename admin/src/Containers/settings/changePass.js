import React from 'react'
import Structure from '../../Components/Structure';


export default function Changepassword() {
    return (
        <Structure>
        <div className="container-fluid">
        
            <div className="row mt-5">
                <div className="col-md-3">
                   
                </div>
                <div className="col-md-6 ">
                
                    <div className="border p-4 form-bg">
                        <p className="h3 text-center mt-2">Change Password</p>

                        <div class="form-group">
                            <label for="exampleInputPassword1">Old Password</label>
                            <input type="password" class="form-control" id="inputUserName" placeholder="Your Name" />
                        </div>


                        <div class="form-group">
                            <label for="exampleInputPassword1">New Password</label>
                            <input type="password" class="form-control" id="inputUserName" placeholder="Your Name" />
                        </div>


                        <div class="form-group">
                            <label for="exampleInputPassword1">Confirm Password</label>
                            <input type="password" class="form-control" id="inputUserName" placeholder="Your Name" />
                        </div>


                      

          

                        <button type="submit" class="btn btn-primary">Update Password</button>

                    </div>


                </div>
            </div>
       
              

        </div>
        </Structure>
    )
}
