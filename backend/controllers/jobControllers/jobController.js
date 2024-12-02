import { client } from '../../db.js';

export function getAllJobs(req, res) {
    try {
        const data = [
            {
                jobId: '1',
                title: 'Job',
                location: ['kerala'],
                requiredSkills: ['C++', 'Java'],
                jobDescription: {
                    minimumQualifications: ['a', 'b'],
                    preferredQualifications: ['a', 'b'],
                    about: '<div>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</div>',
                    responsibilities: ['a', 'b']
                },
                companyImg: 'imgurl',
                companyName: 'someName',
                requiredExperience: 3,
                reqDegree: 1,
                dateOfPost: new Date('2024-10-31'),
                deadline: new Date('2024-10-31'),
            },
            {
                jobId: '1',
                title: 'Job',
                location: ['kerala'],
                requiredSkills: ['C++', 'Java'],
                jobDescription: {
                    minimumQualifications: ['a', 'b'],
                    preferredQualifications: ['a', 'b'],
                    about: '<div>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</div>',
                    responsibilities: ['a', 'b']
                },
                companyImg: 'imgurl',
                companyName: 'someName',
                requiredExperience: 1,
                reqDegree: 1,
                dateOfPost: new Date('2024-10-31'),
                deadline: new Date('2024-10-31'),
            },
            {
                jobId: '1',
                title: 'Job',
                location: ['kerala'],
                requiredSkills: ['C++', 'Java'],
                jobDescription: {
                    minimumQualifications: ['a', 'b'],
                    preferredQualifications: ['a', 'b'],
                    about: '<div>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</div>',
                    responsibilities: ['a', 'b']
                },
                companyImg: 'imgurl',
                companyName: 'someName',
                requiredExperience: 1,
                reqDegree: 1,
                dateOfPost: new Date('2024-10-31'),
                deadline: new Date('2024-10-31'),
            }
        ];
        res.status(200).json(data);
    } catch (err) {
        res.status(500).send("Error: " + err);
    }
}

export function getApplicants(req, res) {
    try {
        const data = [
            {
                applicantId: '1',
                firstName: 'John',
                middleName: '',
                lastName: 'Doe',
                skills: ['c++', 'java'],
                experience: 0,
                degree: 0,
                dateApplied: new Date('2024-10-31'),
                resume: 'resumeUrl',
                applicantDescription: 'string',
                status: 'not recruited'
            },
            {
                applicantId: '1',
                firstName: 'John',
                middleName: '',
                lastName: 'Doe',
                skills: ['java'],
                experience: 0,
                degree: 0,
                dateApplied: new Date('2024-10-31'),
                resume: 'resumeUrl',
                applicantDescription: 'string',
                status: 'not recruited'
            },
            {
                applicantId: '1',
                firstName: 'John',
                middleName: '',
                lastName: 'Doe',
                skills: ['c++', 'java'],
                experience: 0,
                degree: 0,
                dateApplied: new Date('2024-10-31'),
                resume: 'resumeUrl',
                applicantDescription: 'string',
                status: 'not recruited'
            }
        ];
        res.status(200).json(data);
    } catch (err) {
        res.status(500).send("Error : " + err);
    }
}