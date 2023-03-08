import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Acculynx from '../AllWebComponenet/Acculnyx/Acculynx'
import Cablesroofing from '../AllWebComponenet/Cablesroofing/Cablesroofing'
import Csiroofers from '../AllWebComponenet/Csiroofers/Csiroofers'
import Cupapizarras from '../AllWebComponenet/Cupapizarras/Cupapizarras'
import Roof from '../AllWebComponenet/Roof/Roof'
import RoofLInk from '../AllWebComponenet/RoofLink/RoofLInk'

const AllWeb = () => {
    return (
        <div>
            <Routes>
                <Route path="/" exact element={<Acculynx />} />
                <Route path="/path2" element={<Cablesroofing />} />
                <Route path="/path3" element={<Csiroofers />} />
                <Route path="/path4" element={<Cupapizarras />} />
                <Route path="/path5" element={<Roof />} />
                <Route path="/path5" element={<RoofLInk />} />

            </Routes>
        </div>
    )
}

export default AllWeb