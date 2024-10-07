import React, { useState } from 'react';
import { Card, CardContent, CardActions, CardMedia, Typography, Button, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart'; // Import ikon add to cart
import SidebarComponent from '../components/Sidebar';
import axios from 'axios';
import rumahKeren from "../img/rumah.jpg";

const Listrumah = ({ id, title, type, price, location, status, description, onDelete }) => {
  const [confirmOpen, setConfirmOpen] = useState(false);

  const handleDeleteClick = () => {
    setConfirmOpen(true); 
  };

  const handleConfirmDelete = async () => {
    try {
      const response = await axios.delete(`http://localhost:3008/property/delete/${id}`);
      
      if (response.status === 200) {
        onDelete(id); 
        alert("Property berhasil dihapus");
      } else {
        alert("Gagal menghapus property");
      }
    } catch (error) {
      console.error("Error saat menghapus:", error);
      alert("Terjadi kesalahan saat menghapus property");
    } finally {
      setConfirmOpen(false); 
    }
  };

  const handleCancelDelete = () => {
    setConfirmOpen(false); 
  };

  const handleAddToCart = () => {
    alert(`Property ${title} ditambahkan ke keranjang!`);
  };

  const rumahData = [
    { id: 1, title: "Rumah A", type: "Tipe A", price: "Rp 1.000.000.000", location: "Jawa Barat", status: "Available", description: "Rumah minimalis 150 meter" },
    { id: 2, title: "Rumah B", type: "Tipe B", price: "Rp 2.000.000.000", location: "Jawa Tengah", status: "Available", description: "Rumah modern 200 meter" },
    { id: 3, title: "Rumah C", type: "Tipe B", price: "Rp 2.000.000.000", location: "Jawa Tengah", status: "Available", description: "Rumah modern 200 meter" },
    { id: 4, title: "Rumah D", type: "Tipe B", price: "Rp 2.000.000.000", location: "Jawa Tengah", status: "Available", description: "Rumah modern 200 meter" },
    { id: 5, title: "Rumah D", type: "Tipe B", price: "Rp 2.000.000.000", location: "Jawa Tengah", status: "Available", description: "Rumah modern 200 meter" },
  ];

  return (
    <div style={{ display: 'flex' }}>
      <div style={{ flex: '0 0 250px' }}>
        <SidebarComponent />
      </div>
      <div style={{ flex: 1, padding: '16px', display: 'flex', flexWrap: 'wrap' }}>
        {rumahData.map((rumah) => (
          <Card key={rumah.id} sx={{ maxWidth: 345, m: 2 }}>
            <CardMedia
              component="img"
              height="50"
              image={rumahKeren}
              alt={`Gambar dari `}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {rumah.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                <strong>Tipe Rumah:</strong> {rumah.type}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                <strong>Harga:</strong> {rumah.price}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                <strong>Lokasi:</strong> {rumah.location}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                <strong>Status:</strong> {rumah.status}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                <strong>Deskripsi:</strong> {rumah.description}
              </Typography>
            </CardContent>
            <CardActions>
              <Button 
                size="small" 
                startIcon={<AddShoppingCartIcon />}
                onClick={handleAddToCart}
                color="primary"
              >
                Beli
              </Button>
              <Button 
                size="small" 
                startIcon={<DeleteIcon />} 
                onClick={handleDeleteClick}
                color="error"
              >
                Delete
              </Button>
            </CardActions>
          </Card>
        ))}

        {/* Popup konfirmasi delete */}
        <Dialog open={confirmOpen} onClose={handleCancelDelete}>
          <DialogTitle>Konfirmasi Hapus</DialogTitle>
          <DialogContent>
            <Typography>Apakah Anda yakin ingin menghapus property ini?</Typography>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCancelDelete}>Batal</Button>
            <Button onClick={handleConfirmDelete} color="error">Hapus</Button>
          </DialogActions>
        </Dialog>
      </div>
    </div>
  );
};

export default Listrumah;
