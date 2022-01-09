import React from 'react';
import { Skills, Education, ProfessionalExperience, Recognitions } from 'src/utils/dbTemp';
import Landing from 'src/components/layouts/Landing';
import Section from 'src/components/layouts/Section';
import Skill from 'src/components/common/Skill';
import TimeLine from 'src/components/common/TimeLine';
import './Resume.scss';

const Resume = () => {
  return (
    <Landing>
      <Section title={'RESUME.title.skills'}>
        {Skills?.map((skill) => (
          <Skill key={skill.id} {...skill} variant="logo" />
        ))}
      </Section>
      <Section title={'RESUME.title.education'}>
        <TimeLine list={Education} />
      </Section>
      <Section title={'RESUME.title.proExp'}>
        <TimeLine list={ProfessionalExperience} />
      </Section>
      <Section title={'RESUME.title.recognitions'}>
        <TimeLine list={Recognitions} />
      </Section>
    </Landing>
  );
};

export default Resume;
