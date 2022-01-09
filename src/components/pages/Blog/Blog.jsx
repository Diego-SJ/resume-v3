import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMediumHistories } from 'src/redux/appSlice';
import Landing from 'src/components/layouts/Landing';
import Section from 'src/components/layouts/Section';
import CardBlog from 'src/components/common/Card/CardBlog';
import Icon from 'src/components/common/Icon';
import './Blog.scss';

const Resume = () => {
  const dispatch = useDispatch();
  const { fetching, histories } = useSelector(({ app }) => app);

  useEffect(() => {
    if (!histories.length) dispatch(fetchMediumHistories());
  }, [dispatch, histories]);

  return (
    <Landing>
      <Section title="Blog">
        {!fetching ? (
          <>
            {histories?.map((history, index) => (
              <CardBlog key={index} item={history} />
            ))}
          </>
        ) : (
          <div className="loading">
            <Icon icon="spinner9" className="loader-icon" />
          </div>
        )}
      </Section>
    </Landing>
  );
};

export default Resume;
