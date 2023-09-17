import React from 'react';
import { Button, Typography } from '@mui/material';
import styles from './Tab.module.css';

interface Tag {
  number: string;
  title: string;
  paragraph: string;
}

interface TagsProps {
  tags: Tag[];
  onTagClick: (tag: Tag) => void;
  selectedTag: Tag | null;
}

const Tag: React.FC<TagsProps> = ({ tags, onTagClick, selectedTag }) => {
  return (
    <div>
      {tags.map((tag) => (
        <Button
          key={tag.number}
          className={`${styles.tab} ${
            selectedTag && selectedTag.number === tag.number ? styles.selected : ''
          }`}
          sx={{
            py: 1,
            px: 4.4,
            mb: 1.2,
            mr: 1.4,
          }}
          onClick={() => onTagClick(tag)}
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

export default Tag;