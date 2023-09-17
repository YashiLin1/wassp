import React from 'react';
import { Button, Typography } from '@mui/material';
import styles from './Tags.module.css';

interface Tag {
  number: string;
  title: string;
}

interface TagsProps {
  tags: Tag[];
}

const Tags: React.FC<TagsProps> = ({ tags }) => {
  return (
    <div>
      {tags.map((tag) => (
        <Button key={tag.number} className={styles.tags}
            sx={{
                py:1,
                px:4.4,
                mb:1.2,
                mr:1.4,
            }}
        >
          <Typography variant="h6" sx={{ pr: 2 }}>
            {tag.number}
          </Typography>
          <Typography variant="body2">{tag.title}</Typography>
        </Button>
      ))}
    </div>
  );
};

export default Tags;