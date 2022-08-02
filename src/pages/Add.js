import React from "react";
import { useSelector } from "react-redux";
import { Link, Navigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import PageLayout from "../layouts/PageLayout";
import AddNoteForm from "../components/AddNoteForm";
import Container from "../components/ui/Container";
import { HomeLink, Title } from "../components/ui/HomeLink";

const addPage = () => {
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);

  return (
    <>
      {isLoggedIn ? (
        <PageLayout>
          <Container>
            <HomeLink>
              <Title>
                <FontAwesomeIcon icon={faArrowLeft} /> &nbsp;{" "}
                <Link to="/">Back</Link>
              </Title>
            </HomeLink>
            <AddNoteForm />
          </Container>
        </PageLayout>
      ) : (
        <Navigate to="/login" />
      )}
    </>
  );
};

export default addPage;
