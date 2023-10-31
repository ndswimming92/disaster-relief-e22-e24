import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { getSingleDisaster } from '../../../api/disasterData';
import DisasterForm from '../../../components/Forms/DisasterForm';

export default function EditDisaster() {
  const [editItem, setEditItem] = useState({});
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    getSingleDisaster(id).then(setEditItem);
  }, [id]);

  return (<DisasterForm disasterObj={editItem} />);
}
