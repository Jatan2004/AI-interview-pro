import { supabase } from './supabase';

export async function seedInitialData() {
  try {
    const interviewTypes = [
      {
        name: 'Technical',
        description: 'Algorithms, data structures, and system design',
        icon: 'Briefcase',
      },
      {
        name: 'Behavioral',
        description: 'Leadership, teamwork, and problem-solving',
        icon: 'Users',
      },
      {
        name: 'Case Study',
        description: 'Business analysis and strategic thinking',
        icon: 'Target',
      },
      {
        name: 'Industry-Specific',
        description: 'Domain expertise and knowledge',
        icon: 'Zap',
      },
    ];

    const { error: typesError } = await supabase
      .from('interview_types')
      .upsert(interviewTypes, { onConflict: 'name' });

    if (typesError) throw typesError;

    const companies = [
      {
        name: 'Google',
        industry: 'Technology',
        interview_style: 'Focus on data structures, algorithms, and system design',
      },
      {
        name: 'Meta',
        industry: 'Technology',
        interview_style: 'Emphasis on product thinking and coding skills',
      },
      {
        name: 'Amazon',
        industry: 'Technology',
        interview_style: 'Leadership principles and behavioral questions',
      },
      {
        name: 'Apple',
        industry: 'Technology',
        interview_style: 'Design thinking and technical depth',
      },
      {
        name: 'Microsoft',
        industry: 'Technology',
        interview_style: 'Problem-solving and collaboration',
      },
    ];

    const { error: companiesError } = await supabase
      .from('companies')
      .upsert(companies, { onConflict: 'name' });

    if (companiesError) throw companiesError;

    console.log('Initial data seeded successfully');
  } catch (error) {
    console.error('Error seeding data:', error);
  }
}
