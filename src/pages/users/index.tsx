import React from "react";
import Layout from "../../components/layout";
import {graphql, useStaticQuery} from "gatsby";

const UsersPage: React.FC = () => {

    const data = useStaticQuery(graphql`
        query {
            allRestApiUsers {
                edges {
                    node {
                        id
                        name
                        phone
                        username            
                    }
                }
            }
        }
    `);

    console.log(data);

    return (
        <Layout title="Usuarios">
            <table className="table table-striped">
                <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">Phone</th>
                    <th scope="col">Username</th>
                </tr>
                </thead>
                <tbody>
                {data.allRestApiUsers.edges.map((user: any) => (
                    <tr key={user.node.id}>
                        <th scope="row">{user.node.id}</th>
                        <td>{user.node.name}</td>
                        <td>{user.node.phone}</td>
                        <td>{user.node.username}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </Layout>
    );
}

export default UsersPage;
