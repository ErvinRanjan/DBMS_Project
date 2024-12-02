export async function getConnections(req, res) {
    try {
        const data = [{
            firstName: 'John',
            middleName: '',
            lastName: 'Doe',
            description: 'SWE @ Google',
            userImg: 'imgurl',
            status: 'not connected',
        }, {
            firstName: 'John',
            middleName: '',
            lastName: 'Doe',
            description: 'SWE @ Google',
            userImg: 'imgurl',
            status: 'not connected',
        }, {
            firstName: 'John',
            middleName: '',
            lastName: 'Doe',
            description: 'SWE @ Google',
            userImg: 'imgurl',
            status: 'not connected',
        }, {
            firstName: 'John',
            middleName: '',
            lastName: 'Doe',
            description: 'SWE @ Google',
            userImg: 'imgurl',
            status: 'not connected'
        }];
        res.status(200).json(data);
    } catch (err) {
        console.log("Error while getting connections:" + err);
    }
}

export async function getConnectionRequests(req, res) {
    try {
        const data = [{
            firstName: 'John',
            middleName: '',
            lastName: 'Doe',
            requesterId: '1',
            status: false,
            requesterImg: 'imgurl'
        }, {
            firstName: 'John',
            middleName: '',
            lastName: 'Doe',
            requesterId: '1',
            status: false,
            requesterImg: 'imgurl'
        }];
        res.status(200).json(data);
    } catch (err) {
        console.log("Error while getting connection requests: " + err);
    }
}