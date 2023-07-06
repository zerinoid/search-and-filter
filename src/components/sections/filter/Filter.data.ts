const base = [
  {
    groupName: 'status',
    filters: [
      {
        label: 'Planning',
        value: 'planning'
      },
      {
        label: 'In Progress',
        value: 'inprogress'
      },
      {
        label: 'Done',
        value: 'done'
      }
    ]
  },
  {
    groupName: 'area',
    filters: [
      {
        label: 'Architecture',
        value: 'Architecture'
      },
      {
        label: 'Music',
        value: 'Music'
      },
      {
        label: 'Painting',
        value: 'Painting'
      },
      {
        label: 'Poetry',
        value: 'Poetry'
      },
      {
        label: 'Cinema',
        value: 'Cinema'
      }
    ]
  },
  {
    groupName: 'program',
    filters: [
      {
        label: 'Endorsement',
        value: 'Endorsement'
      },
      {
        label: 'Internship',
        value: 'Internship'
      },
      {
        label: 'Scholarship',
        value: 'Scholarship'
      },
      {
        label: 'Integration',
        value: 'Integration'
      }
    ]
  }
];

export const filterData = {
  base
};
