import { createRequest, createResponse } from 'node-mocks-http';
import handler from '../[id]';
import dbConnect from '@/lib/dbConnect';
import Item from '@/models/Item';

jest.mock('@/lib/dbConnect');
jest.mock('@/models/Item');

describe('/api/items/[id]', () => {
  beforeEach(() => {
    // Limpiar todos los mocks antes de cada prueba para asegurar un estado limpio
    jest.clearAllMocks();
  });

  it('should return an item by ID on GET', async () => {
    // Datos simulados para un elemento
    const mockItem = { _id: '123', name: 'Test Item' };
    // Simular el método Item.findById para que devuelva nuestro elemento simulado
    (Item.findById as jest.Mock).mockResolvedValue(mockItem);

    // Crear un objeto de solicitud simulado para una solicitud GET con un ID
    const req = createRequest({
      method: 'GET',
      query: { id: '123' },
    });
    // Crear un objeto de respuesta simulado
    const res = createResponse();

    // Llamar al manejador de la API
    await handler(req as any, res as any);

    // Afirmaciones
    // Asegurarse de que dbConnect fue llamado una vez
    expect(dbConnect).toHaveBeenCalledTimes(1);
    // Asegurarse de que Item.findById fue llamado con el ID correcto
    expect(Item.findById).toHaveBeenCalledWith('123');
    // Asegurarse de que el código de estado es 200 (OK)
    expect(res._getStatusCode()).toBe(200);
    // Asegurarse de que los datos JSON devueltos coinciden con el elemento simulado
    expect(res._getJSONData()).toEqual({ success: true, data: mockItem });
  });

  it('should return 404 if item not found on GET', async () => {
    // Simular el método Item.findById para que devuelva null (elemento no encontrado)
    (Item.findById as jest.Mock).mockResolvedValue(null);

    // Crear un objeto de solicitud simulado para una solicitud GET con un ID
    const req = createRequest({
      method: 'GET',
      query: { id: '123' },
    });
    // Crear un objeto de respuesta simulado
    const res = createResponse();

    // Llamar al manejador de la API
    await handler(req as any, res as any);

    // Afirmaciones
    // Asegurarse de que dbConnect fue llamado una vez
    expect(dbConnect).toHaveBeenCalledTimes(1);
    // Asegurarse de que Item.findById fue llamado con el ID correcto
    expect(Item.findById).toHaveBeenCalledWith('123');
    // Asegurarse de que el código de estado es 404 (No encontrado)
    expect(res._getStatusCode()).toBe(404);
    // Asegurarse de que los datos JSON devueltos indican fallo
    expect(res._getJSONData()).toEqual({ success: false });
  });

  it('should update an item on PUT', async () => {
    // Datos actualizados para el elemento
    const updatedItemData = { name: 'Updated Item' };
    // Simular el elemento actualizado con un ID
    const mockUpdatedItem = { _id: '123', ...updatedItemData };
    // Simular el método Item.findByIdAndUpdate para que devuelva el elemento actualizado
    (Item.findByIdAndUpdate as jest.Mock).mockResolvedValue(mockUpdatedItem);

    // Crear un objeto de solicitud simulado para una solicitud PUT con un ID y datos actualizados
    const req = createRequest({
      method: 'PUT',
      query: { id: '123' },
      body: updatedItemData,
    });
    // Crear un objeto de respuesta simulado
    const res = createResponse();

    // Llamar al manejador de la API
    await handler(req as any, res as any);

    // Afirmaciones
    // Asegurarse de que dbConnect fue llamado una vez
    expect(dbConnect).toHaveBeenCalledTimes(1);
    // Asegurarse de que Item.findByIdAndUpdate fue llamado con los argumentos correctos
    expect(Item.findByIdAndUpdate).toHaveBeenCalledWith('123', updatedItemData, { new: true, runValidators: true });
    // Asegurarse de que el código de estado es 200 (OK)
    expect(res._getStatusCode()).toBe(200);
    // Asegurarse de que los datos JSON devueltos coinciden con el elemento actualizado
    expect(res._getJSONData()).toEqual({ success: true, data: mockUpdatedItem });
  });

  it('should return 404 if item not found on PUT', async () => {
    // Simular el método Item.findByIdAndUpdate para que devuelva null (elemento no encontrado)
    (Item.findByIdAndUpdate as jest.Mock).mockResolvedValue(null);

    // Crear un objeto de solicitud simulado para una solicitud PUT con un ID y datos
    const req = createRequest({
      method: 'PUT',
      query: { id: '123' },
      body: { name: 'Updated Item' },
    });
    // Crear un objeto de respuesta simulado
    const res = createResponse();

    // Llamar al manejador de la API
    await handler(req as any, res as any);

    // Afirmaciones
    // Asegurarse de que dbConnect fue llamado una vez
    expect(dbConnect).toHaveBeenCalledTimes(1);
    // Asegurarse de que Item.findByIdAndUpdate fue llamado con los argumentos correctos
    expect(Item.findByIdAndUpdate).toHaveBeenCalledWith('123', { name: 'Updated Item' }, { new: true, runValidators: true });
    // Asegurarse de que el código de estado es 404 (No encontrado)
    expect(res._getStatusCode()).toBe(404);
    // Asegurarse de que los datos JSON devueltos indican fallo
    expect(res._getJSONData()).toEqual({ success: false });
  });

  it('should delete an item on DELETE', async () => {
    // Simular el método Item.deleteOne para que devuelva que un elemento fue eliminado
    (Item.deleteOne as jest.Mock).mockResolvedValue({ deletedCount: 1 });

    // Crear un objeto de solicitud simulado para una solicitud DELETE con un ID
    const req = createRequest({
      method: 'DELETE',
      query: { id: '123' },
    });
    // Crear un objeto de respuesta simulado
    const res = createResponse();

    // Llamar al manejador de la API
    await handler(req as any, res as any);

    // Afirmaciones
    // Asegurarse de que dbConnect fue llamado una vez
    expect(dbConnect).toHaveBeenCalledTimes(1);
    // Asegurarse de que Item.deleteOne fue llamado con el ID correcto
    expect(Item.deleteOne).toHaveBeenCalledWith({ _id: '123' });
    // Asegurarse de que el código de estado es 204 (Sin contenido)
    expect(res._getStatusCode()).toBe(204);
    // Asegurarse de que los datos JSON devueltos están vacíos
    expect(res._getJSONData()).toEqual({ success: true, data: {} });
  });

  it('should return 404 if item not found on DELETE', async () => {
    // Simular el método Item.deleteOne para que devuelva que ningún elemento fue eliminado
    (Item.deleteOne as jest.Mock).mockResolvedValue({ deletedCount: 0 });

    // Crear un objeto de solicitud simulado para una solicitud DELETE con un ID
    const req = createRequest({
      method: 'DELETE',
      query: { id: '123' },
    });
    // Crear un objeto de respuesta simulado
    const res = createResponse();

    // Llamar al manejador de la API
    await handler(req as any, res as any);

    // Afirmaciones
    // Asegurarse de que dbConnect fue llamado una vez
    expect(dbConnect).toHaveBeenCalledTimes(1);
    // Asegurarse de que Item.deleteOne fue llamado con el ID correcto
    expect(Item.deleteOne).toHaveBeenCalledWith({ _id: '123' });
    // Asegurarse de que el código de estado es 404 (No encontrado)
    expect(res._getStatusCode()).toBe(404);
    // Asegurarse de que los datos JSON devueltos indican fallo
    expect(res._getJSONData()).toEqual({ success: false });
  });

  it('should return 405 for unsupported methods', async () => {
    // Crear un objeto de solicitud simulado para un método no compatible (POST)
    const req = createRequest({
      method: 'POST',
      query: { id: '123' },
    });
    // Crear un objeto de respuesta simulado
    const res = createResponse();

    // Llamar al manejador de la API
    await handler(req as any, res as any);

    // Afirmaciones
    // Asegurarse de que el código de estado es 405 (Método no permitido)
    expect(res._getStatusCode()).toBe(405);
    // Asegurarse de que el encabezado 'Allow' contiene 'GET', 'PUT' y 'DELETE'
    expect(res._getHeaders().allow).toEqual(['GET', 'PUT', 'DELETE']);
  });
});