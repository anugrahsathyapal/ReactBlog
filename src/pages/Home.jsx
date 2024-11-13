import React from 'react';

const Home = () => {
  return (
    <>
      <div style={{ paddingTop: '100px',marginBottom:'60px' }}>
        {/* First Section */}
        <div className='container bg-warning py-3  rounded-5 shadow mb-5'>
          <div className='row align-items-center'>
            <div className='col-md-6'>
              <h1 className='mb-3 text-center'>Story Scribe</h1>
              <img
                className='rounded-5 shadow img-fluid'
                src="https://www.blogtyrant.com/wp-content/uploads/2015/08/blog-design-examples.png"
                alt="Story Scribe"
              />
            </div>
            <div className='col-md-6'>
              <p className='fs-4'>
                Welcome to Story Scribe. At Story Scribe, we believe that every story matters. Join us in creating a rich tapestry of voices and experiences. Explore, write, and connect – because your story is worth telling.
              </p>
            </div>
          </div>
        </div>

        {/* Second Section */}
        <div className='container bg-warning py-3 rounded-5 shadow mb-5'>
          <div className='row align-items-center'>
            <div className='col-md-6'>
              <h1 className='mb-3 text-center'>Discover and Connect</h1>
              <img
                className='rounded-5 shadow img-fluid'
                style={{height:'271px',width:'543px'}}
                src="https://media.istockphoto.com/id/598687956/vector/social-network.jpg?s=612x612&w=0&k=20&c=Q-PikdSxJSmak2LNLIAHMSL4eBM0fWVg6qtRbSrpP0U="
                alt="Discover and Connect"
              />
            </div>
            <div className='col-md-6'>
              <p className='fs-4'>
                Dive into an ocean of diverse blogs that span across various genres and topics. From personal diaries to professional insights, from whimsical tales to thought-provoking essays, there's something for every reader and writer. Connect with a community of like-minded individuals, engage in meaningful discussions, and find inspiration in the words of others.
              </p>
            </div>
          </div>
        </div>

        {/* Third Section */}
        <div className='container bg-warning py-3 rounded-5 shadow'>
          <div className='row align-items-center'>
            <div className='col-md-6'>
              <h1 className='mb-3 text-center'>Get Started</h1>
              <img
                style={{height:'271px',width:'543px'}}
                className='rounded-5 shadow img-fluid'
                src="https://img.freepik.com/free-vector/flat-design-starting-line-illustration_23-2149459875.jpg"
                alt="Get Started"
              />
            </div>
            <div className='col-md-6'>
              <p className='fs-4'>
                Ready to share your story? Join our community today and start writing. The world is waiting to hear your voice. Explore our platform and become a part of a growing movement.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
