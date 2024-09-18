import { Route, Routes, Navigate } from "react-router-dom";
import Home from "../Components/Home";
import PokeDetail from "../Components/PokeDetail";
import SignupForm from "../Auth/SignupForm";
import LoginForm from "../Auth/LoginForm";
import ProfileForm from "../Profile/ProfileForm";
import PrivateRoute from "./PrivateRoute";
import Profile from "../Profile/Profile";
import Move from "../Components/Move";
import LogSigRoute from "./LogSigRoute";




function RouteList({ pokemon, login, signup }) {
    return (
        <Routes>
            <Route path="/" element={<Home />}></Route>

            <Route path="/login" element={ <LogSigRoute><LoginForm login={login} /> </LogSigRoute>}/>
                
            
            <Route path="/signup" element={ <LogSigRoute><SignupForm signup={signup}/> </LogSigRoute>}/>
                
            <Route path="/profile" element={<PrivateRoute><Profile pokemon={pokemon}/></PrivateRoute>}>
                
            </Route>
                
            
            <Route path="/pokemon/:name"
                   element={<PokeDetail pokemon={pokemon} />}
            />

            <Route path="/move/:name" element={<Move pokemon={pokemon}/>} />

            <Route path="/profile-form" element={<PrivateRoute><ProfileForm/></PrivateRoute>}>
                
            </Route>

            <Route path="/*"
                   element={<Navigate to="/" />}
            />
        </Routes>
    )
}

export default RouteList;